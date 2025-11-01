interface ConflictCardProps {
  title: string;
  description: string;
}

const ConflictCard = ({ title, description }: ConflictCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-red-500/50 dark:border-red-500/40">
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-red-500 mt-0.5">
          error
        </span>
        <div className="flex-1">
          <p className="text-base font-bold text-[#111318] dark:text-white">
            {title}
          </p>
          <p className="text-sm text-[#616f89] dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConflictCard;
