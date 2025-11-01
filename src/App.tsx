import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ScheduleTable from './components/ScheduleTable';
import ConflictCard from './components/ConflictCard';
import RecommendationCard from './components/RecommendationCard';
import conflictsData from './data/conflicts.json';
import recommendationsData from './data/recommendations.json';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <div className="flex h-full grow">
          <Sidebar />
          <main className="flex-1 p-6 lg:p-10">
            <div className="layout-content-container flex flex-col max-w-7xl mx-auto flex-1">
              <Header />
              <div className="mt-8 border-b border-gray-200 dark:border-gray-800 pb-6">
                <div className="gap-4 flex flex-wrap justify-start items-center">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                    <span className="material-symbols-outlined text-base">
                      auto_awesome
                    </span>
                    <span className="truncate">Generate Schedule</span>
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-gray-600">
                    <span className="material-symbols-outlined text-base">undo</span>
                    <span className="truncate">Undo</span>
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-gray-600">
                    <span className="material-symbols-outlined text-base">
                      download
                    </span>
                    <span className="truncate">Export</span>
                  </button>
                </div>
              </div>
              <p className="text-orange-500 dark:text-orange-400 text-sm font-medium leading-normal pt-4">
                Status: <span className="font-bold">Conflicts Found</span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                <div className="lg:col-span-1 flex flex-col gap-8">
                  <div>
                    <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
                      Scheduling Conflicts Detected
                    </h2>
                    <div className="flex flex-col gap-4">
                      {conflictsData.map((conflict, index) => (
                        <ConflictCard
                          key={index}
                          title={conflict.title}
                          description={conflict.description}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
                      AI Recommendations
                    </h2>
                    <div className="flex flex-col gap-4">
                      {recommendationsData.map((recommendation, index) => (
                        <RecommendationCard
                          key={index}
                          title={recommendation.title}
                          description={recommendation.description}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <ScheduleTable />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
