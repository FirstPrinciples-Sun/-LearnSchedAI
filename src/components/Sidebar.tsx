const Sidebar = () => {
  return (
    <aside className="flex-shrink-0 w-64 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800">
      <div className="flex h-full min-h-[700px] flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt="Admin profile picture"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGo2MfcNzm3BwaT0kMcIS2zg9vxYIe3XfmjU9NBZ1_vxrV7XiOxc_C5kmJ_5C3rm2abJo72H2nhWeWfB6sBFgPvHTz3zKNdm9y1G_zYbN6qPxAz45phC8fYSs9xq7qG1iQs7RzMPQ1HY-97EV_pQrT8rTQbODjhWWr3x_o0s8NoLX_741fhkYHqhWtLxX2-UhYIzNUB93zYUH8J1OgfYiH3z53SjDOm0svj7o5QjYl-yv9ZeEbMkQVSeCMH2hn70WXK2SphpLZkk4")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-[#111318] dark:text-white text-base font-medium leading-normal">
                Admin
              </h1>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                administrator@school.edu
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-[#111318] dark:text-gray-300"
              href="#"
            >
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium leading-normal">Teachers</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-[#111318] dark:text-gray-300"
              href="#"
            >
              <span className="material-symbols-outlined">class</span>
              <p className="text-sm font-medium leading-normal">Classes</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-[#111318] dark:text-gray-300"
              href="#"
            >
              <span className="material-symbols-outlined">meeting_room</span>
              <p className="text-sm font-medium leading-normal">Rooms</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-[#111318] dark:text-gray-300"
            href="#"
          >
            <span className="material-symbols-outlined">help_outline</span>
            <p className="text-sm font-medium leading-normal">Help</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-[#111318] dark:text-gray-300"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium leading-normal">Settings</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
