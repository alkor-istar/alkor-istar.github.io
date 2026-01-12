import { recommendations } from "../../data/recomendations";
import RecommendationCard from "./RecomendationCard";
import { useInView } from "../../hooks/useInView";

export default function RecommendationsSection() {
    const { ref, inView } = useInView < HTMLDivElement > ({
        threshold: 0.2,
    });

    return (
        <section id="recommendations" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div >
                    <h2 className="text-4xl md:text-5xl font-heading text-white mb-4 text-center">
                        Recommendations
                    </h2>

                    <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
                        Feedback from people I’ve worked with across different teams
                        and industries.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommendations.map((rec, index) => (
                        <div
                            key={rec.id}

                        >
                            <RecommendationCard recommendation={rec} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
