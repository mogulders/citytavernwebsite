const hours = [
    { day: "Monday", time: "11:00 AM – 1:00 AM" },
    { day: "Tuesday", time: "11:00 AM – 1:00 AM" },
    { day: "Wednesday", time: "11:00 AM – 1:00 AM" },
    { day: "Thursday", time: "11:00 AM – 1:00 AM" },
    { day: "Friday", time: "11:00 AM – 1:00 AM" },
    { day: "Saturday", time: "11:00 AM – 1:00 AM" },
    { day: "Sunday", time: "11:00 AM – 1:00 AM" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="font-display font-bold uppercase tracking-[0.3em] text-orange-brand text-sm mb-2">
                        Come Visit Us
                    </p>
                    <h2 className="section-title text-blue-dark mb-4">
                        Find Us
                    </h2>
                    <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left — Info */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-brand/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-orange-brand"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-blue-dark text-xl uppercase mb-1">
                                    Address
                                </h3>
                                <p className="font-body text-gray-600">
                                    128 N Main St
                                </p>
                                <p className="font-body text-gray-600">
                                    Greenville, SC 29601
                                </p>
                                <a
                                    href="https://maps.google.com/?q=128+N+Main+St+Greenville+SC+29601"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-display font-bold text-blue-light text-sm uppercase tracking-wide hover:text-orange-brand transition-colors mt-1 inline-block"
                                >
                                    Get Directions →
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-brand/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-orange-brand"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-blue-dark text-xl uppercase mb-1">
                                    Phone
                                </h3>
                                <a
                                    href="tel:+18642637439"
                                    className="font-body text-gray-600 hover:text-orange-brand transition-colors text-lg"
                                >
                                    (864) 263-7439
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-brand/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-orange-brand"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-display font-bold text-blue-dark text-xl uppercase mb-3">
                                    Hours
                                </h3>
                                <div className="space-y-1.5">
                                    {hours.map(({ day, time }) => (
                                        <div
                                            key={day}
                                            className={`flex justify-between items-center py-1.5 px-3 rounded-lg text-sm font-body ${
                                                day === today
                                                    ? "bg-orange-brand/10 text-orange-brand font-semibold"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            <span
                                                className={
                                                    day === today
                                                        ? "font-bold"
                                                        : ""
                                                }
                                            >
                                                {day}
                                            </span>
                                            <span>{time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-brand/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-orange-brand"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-blue-dark text-xl uppercase mb-1">
                                    Follow Us
                                </h3>
                                <a
                                    href="https://www.facebook.com/CityTavernGreenvilleSC/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-gray-600 hover:text-orange-brand transition-colors"
                                >
                                    @CityTavernGreenvilleSC
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Map */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-96 lg:h-auto min-h-80">
                        <iframe
                            title="City Tavern Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.123456789!2d-82.40125!3d34.84843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582f2d10b41c7d%3A0x4a26543e5c0b5c8b!2s128%20N%20Main%20St%2C%20Greenville%2C%20SC%2029601!5e0!3m2!1sen!2sus!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "320px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
