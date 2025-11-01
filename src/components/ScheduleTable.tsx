import scheduleData from '../data/schedule.json';

const colorMap: { [key: string]: string } = {
  green: 'bg-green-100 dark:bg-green-900/40',
  purple: 'bg-purple-100 dark:bg-purple-900/40',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/40',
  blue: 'bg-blue-100 dark:bg-blue-900/40',
  orange: 'bg-orange-100 dark:bg-orange-900/40',
  gray: 'bg-gray-100 dark:bg-gray-700/50',
};

const ScheduleTable = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-[#111318] dark:text-white">
          Grade 9 Schedule
        </h3>
        <div className="flex gap-2">
          <select className="text-sm rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary">
            <option>Filter by Teacher</option>
          </select>
          <select className="text-sm rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-primary focus:border-primary">
            <option>Filter by Room</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="p-2 w-24">Time</th>
              <th className="p-2">Monday</th>
              <th className="p-2">Tuesday</th>
              <th className="p-2">Wednesday</th>
              <th className="p-2">Thursday</th>
              <th className="p-2">Friday</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {scheduleData.map((row) => (
              <tr
                key={row.time}
                className={row.conflict_row ? 'bg-red-50/50 dark:bg-red-900/20' : ''}
              >
                <td className="p-2 font-medium">
                  {row.time} <br />
                  <span className="font-normal text-xs text-gray-500">
                    {row.time_range}
                  </span>
                </td>
                {row.days.map((day, index) => (
                  <td key={index} className="p-2">
                    <div
                      className={`p-1.5 rounded-md ${colorMap[day.color]} ${
                        day.conflict ? 'ring-2 ring-red-500' : ''
                      } ${day.lunch ? 'text-center' : ''}`}
                    >
                      <strong>{day.subject}</strong>
                      {day.teacher && (
                        <>
                          <br />
                          <span className="text-xs">{day.teacher}</span>
                        </>
                      )}
                      {day.conflict && (
                        <>
                          <br />
                          <span className="text-xs font-bold text-red-600 dark:text-red-400">
                            Conflict!
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
