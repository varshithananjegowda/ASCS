// =============================== // FILE 1: App.jsx // ===============================

export default function ASASDashboard() {

const [activePage, setActivePage] = React.useState("Dashboard"); // =============================== // FILE 3: logs.js // ===============================

const logs = [ "IR Block Mode Activated", "High Temperature Detected", "Filter Position Changed to 2", "Normal Mode Activated", "System Initialized", ];

return ( <div className="min-h-screen bg-black text-white flex font-sans"> {/* Sidebar */} <div className="w-64 bg-[#0b0f12] border-r border-gray-800 p-5"> <h1 className="text-3xl font-bold text-green-400">ASAS</h1> <p className="text-gray-400 text-sm mb-8"> Adaptive Spectral Agro-Voltaic System </p>

<div className="space-y-4">
      {[
        "Dashboard",
        "Live Data",
        "Control",
        "Energy",
        "History",
        "Alerts",
        "Settings",
      ].map((item, index) => (
        <div
          key={index}
          onClick={() => setActivePage(item)}
          className={`p-3 rounded-xl cursor-pointer transition-all ${
            activePage === item
              ? "bg-green-500/20 text-green-400"
              : "hover:bg-gray-800 text-gray-300"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* Main Content */}
  <div className="flex-1 p-6 bg-gradient-to-br from-black via-[#06111a] to-black">
    {/* Top Bar */}
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold">{activePage}</h2>
        <p className="text-gray-400 text-sm">
          {activePage} Section Opened Successfully
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-300">System Status</span>
        <div className="bg-green-500/20 px-4 py-1 rounded-full text-green-400 font-semibold">
          ACTIVE
        </div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>

    {/* Cards */}
    {/* =============================== */}
    {/* FILE 4: SensorCards.jsx */}
    {/* =============================== */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {/* Temperature */}
      <Card title="Temperature" value="31.8 °C" color="text-green-400">
        <div className="h-2 bg-green-500 rounded-full w-3/4 mt-4"></div>
        <p className="text-sm text-gray-400 mt-4">Last Updated: 6:35 PM</p>
      </Card>

      {/* Light */}
      <Card title="Light Intensity" value="652 lux" color="text-yellow-400">
        <div className="h-2 bg-yellow-400 rounded-full w-2/3 mt-4"></div>
        <p className="text-sm text-gray-400 mt-4">Last Updated: 6:35 PM</p>
      </Card>

      {/* Filter Mode */}
      <Card title="Filter Mode" value="IR BLOCK" color="text-blue-400">
        <p className="text-gray-400 mt-2">Reducing Heat Stress</p>
        <p className="text-sm text-gray-400 mt-4">Last Updated: 6:35 PM</p>
      </Card>

      {/* Solar Output */}
      <Card title="Solar Output" value="12.6 V" color="text-green-400">
        <div className="flex gap-6 mt-3 text-green-300">
          <span>0.62 A</span>
          <span>7.81 W</span>
        </div>
        <p className="text-sm text-gray-400 mt-4">Last Updated: 6:35 PM</p>
      </Card>
    </div>

    {/* Middle Grid */}
    {/* =============================== */}
    {/* FILE 5: EnergyAndEnvironment.jsx */}
    {/* =============================== */}

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
      {/* Filter Position */}
      <div className="bg-[#0d1520] border border-gray-800 rounded-2xl p-5 shadow-lg">
        <h3 className="text-xl mb-6">Spectral Filter Position</h3>

        <div className="flex justify-center items-center">
          <div className="relative w-52 h-52 rounded-full border-[18px] border-blue-500 border-t-red-400 border-r-green-400 border-b-gray-500">
            <div className="absolute w-2 h-24 bg-white left-1/2 top-1/2 origin-bottom rotate-[-35deg]"></div>
          </div>
        </div>

        <p className="text-center text-4xl mt-4 text-white">2 / 5</p>
        <p className="text-center text-gray-400">Current Position</p>
      </div>

      {/* Energy Graph */}
      <div className="bg-[#0d1520] border border-gray-800 rounded-2xl p-5 shadow-lg col-span-1 lg:col-span-1">
        <h3 className="text-xl mb-4">Energy Generated Today</h3>
        <p className="text-3xl text-green-400 mb-4">1.25 Wh</p>

        <div className="h-52 bg-gradient-to-t from-green-500/20 to-transparent rounded-xl relative overflow-hidden">
          <svg viewBox="0 0 300 120" className="absolute inset-0 w-full h-full">
            <polyline
              fill="none"
              stroke="#4ade80"
              strokeWidth="4"
              points="0,110 40,100 80,90 120,70 160,65 200,50 240,35 300,10"
            />
          </svg>
        </div>
      </div>

      {/* Environmental Conditions */}
      <div className="bg-[#0d1520] border border-gray-800 rounded-2xl p-5 shadow-lg">
        <h3 className="text-xl mb-5">Environmental Conditions</h3>

        <div className="space-y-5">
          <div>
            <p className="text-gray-400">Humidity</p>
            <p className="text-blue-400 text-2xl">68%</p>
          </div>

          <div>
            <p className="text-gray-400">Air Quality</p>
            <p className="text-green-400 text-2xl">Good</p>
          </div>

          <div>
            <p className="text-gray-400">Wind Speed</p>
            <p className="text-cyan-400 text-2xl">2.4 m/s</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Grid */}
    {/* =============================== */}
    {/* FILE 6: SystemControl.jsx */}
    {/* =============================== */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
      {/* System Control */}
      <div className="bg-[#0d1520] border border-gray-800 rounded-2xl p-5 shadow-lg">
        <h3 className="text-xl mb-5">System Control</h3>

        <div className="flex items-center gap-4 mb-5">
          <span>Manual Override</span>
          <div className="w-14 h-7 bg-gray-700 rounded-full relative">
            <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-xl">
            OPEN
          </button>

          <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl">
            NORMAL
          </button>

          <button className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-xl">
            IR BLOCK
          </button>

          <button className="bg-green-500 hover:bg-green-400 px-5 py-2 rounded-xl">
            AUTOMATION ON
          </button>
        </div>
      </div>

      {/* Logs */}
      <div className="bg-[#0d1520] border border-gray-800 rounded-2xl p-5 shadow-lg">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl">System Log</h3>
          <span className="text-blue-400 cursor-pointer">View All</span>
        </div>

        <div className="space-y-4 text-gray-300">
          {logs.map((log, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-800 pb-2"
            >
              <span>06:3{index}:12 PM</span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

); }

// =============================== // FILE 2: Card.jsx // ===============================

function Card({ title, value, color, children }) { return ( <div className="bg-[#0d1520] border border-gray-800 rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition-all duration-300"> <h3 className="text-lg text-gray-300 mb-4">{title}</h3> <div className={text-5xl font-bold ${color}}>{value}</div> {children} </div> ); }
