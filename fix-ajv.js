const fs = require('fs');
const path = require('path');

function fixNestedAjv(dir) {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      if (!file.isDirectory()) continue;
      
      const fullPath = path.join(dir, file.name);
      
      // Check if this is ajv-keywords
      if (file.name === 'ajv-keywords') {
        const nestedAjv = path.join(fullPath, 'node_modules', 'ajv');
        if (fs.existsSync(nestedAjv)) {
          try {
            const stat = fs.statSync(nestedAjv);
            if (stat.isDirectory()) {
              // Remove old ajv@6
              fs.rmSync(nestedAjv, { recursive: true, force: true });
              // Find the top-level ajv@8
              const topLevelAjv = path.resolve(__dirname, 'node_modules', 'ajv');
              if (fs.existsSync(topLevelAjv)) {
                // Create symlink
                const relativePath = path.relative(path.dirname(nestedAjv), topLevelAjv);
                fs.symlinkSync(relativePath, nestedAjv, 'dir');
                console.log(`Fixed: ${nestedAjv} -> ${topLevelAjv}`);
              }
            }
          } catch (e) {
            // Ignore errors
          }
        }
      }
      
      // Recursively check subdirectories
      fixNestedAjv(fullPath);
    }
  } catch (e) {
    // Ignore errors
  }
}

if (fs.existsSync(path.join(__dirname, 'node_modules'))) {
  fixNestedAjv(path.join(__dirname, 'node_modules'));
  console.log('ajv fix completed');
}

