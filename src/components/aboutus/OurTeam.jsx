const teamMembers = [
    {
        name: "Pham Gia Bao",
        role: "Developer",
        email: "pgiabao159@gmail.com",
        quotes:
            "Creating a seamless and modern shopping experience for our customers.",
        image: "/images/ourteam/avatargiabao.png",
    },
    {
        name: "Nguyen Thanh Bao",
        role: "Developer",
        email: "thanhbao1080@gmail.com",
        quotes:
            "Building a secure, scalable, and efficient system to handle orders smoothly.",
        image: "/images/ourteam/avatartbao.jpg",
    },
    {
        name: "Vo Cong Quoc Quang",
        role: "Data Analyst",
        email: "vocongquocquang@gmail.com",
        quotes: "Analyzing customer behavior and sales trends to optimize business growth.",
        image: "/images/ourteam/avatarquang.jpg",
    },
];


function OurTeam() {
    return (
        <div className="ourteam py-12 px-6 md:px-10">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-10 ">
                Meet Our Team
            </h2>

            {/* Team grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`member bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out
                            ${index === 2 ? "sm:justify-self-center lg:justify-self-auto" : ""}
                        `}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-[200px] h-[200px] rounded-full border-4 border-gray-200 object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">
                            {member.name}
                        </h3>
                        <p className="text-sm font-bold text-[#DC143C]">
                            {member.role}
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            {member.email}
                        </p>
                        <p className="italic text-gray-500 mt-3 text-sm">
                            “{member.quotes}”
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;

