export default function RecommendationCard({ recommendation }) {
    return (
        <div className="h-full p-6 rounded-xl border border-gray-800 bg-black/60 backdrop-blur">
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{recommendation.text}”
            </p>

            <div className="mt-auto">
                <div className="text-white font-semibold">
                    {recommendation.name}
                </div>
                <div className="text-gray-500 text-sm">
                    {recommendation.role}
                    {recommendation.company && ` · ${recommendation.company}`}
                </div>
            </div>
        </div>
    );
}
