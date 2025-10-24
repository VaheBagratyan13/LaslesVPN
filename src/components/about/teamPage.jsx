const TeamPage = ({ showElements }) => {
    const team = [
        {
          name: "Sarah Johnson",
          role: "CEO & Founder",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          description: "15+ years in cybersecurity and privacy advocacy"
        },
        {
          name: "Michael Chen",
          role: "CTO",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          description: "Expert in network security and infrastructure"
        },
        {
          name: "Emily Rodriguez",
          role: "Head of Product",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
          description: "User experience and product strategy specialist"
        },
        {
          name: "David Kim",
          role: "Head of Security",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          description: "Cybersecurity expert and privacy researcher"
        }
      ];
    return (
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 transform delay-700 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind LaslesVPN, working tirelessly to protect your privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className={`text-center bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default TeamPage;