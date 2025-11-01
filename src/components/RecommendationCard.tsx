interface RecommendationCardProps {
  title: string;
  description: string;
}

const RecommendationCard = ({ title, description }: RecommendationCardProps) => {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl border border-blue-500/30">
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-blue-500 mt-0.5">
          lightbulb
        </span>
        <div className="flex-1">
          <p className="text-base font-bold text-[#111318] dark:text-white">
            {title}
          </p>
          <p className="text-sm text-[#616f89] dark:text-gray-400 mt-1">
            {description}
          </p>
          <div className="flex gap-2 mt-3">
            <button className="flex-1 text-xs font-bold bg-primary text-white rounded-md py-1.5 px-3">
              Apply Change
            </button>
            <button className="flex-1 text-xs font-bold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md py-1.5 px-3">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
