import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import StatsGrid from './components/ui/stats/StatsGrid'
import { statsData } from './data/statsData'
import Button from './components/ui/button/Button'
import Table from './components/ui/table/Table'


function App() {

  // Example Usage
const employees = [
  {
    id: 1,
    name: "John ",
    email: "john@creative-tim.com",
    role: "Manager",
    department: "Organization",
    status: "online",
    employedDate: "23/04/18",
  },
  {
    id: 2,
    name: "Alexa ",
    email: "alexa@creative-tim.com",
    role: "Designer",
    department: "Marketing",
    status: "offline",
    employedDate: "23/04/18",
  },
];

// Define Columns with Optional Render Functions
const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs font-bold uppercase rounded-md ${
        value === "online" ? "bg-green-500/20 text-green-900" : "bg-slate-100 text-slate-500"
      }`}>
        {value}
      </span>
    ) 
  },
  { key: "employedDate", label: "Employed Date" },
  { key: "actions", label: "Actions", render: () => (
      <button className="h-10 w-10 rounded-lg text-slate-900 hover:bg-slate-900/10">✏️</button>
    ) 
  },
];
  

  return (
    <div className="App bg-[#EFFAEF] h-full">
      <FrappeProvider socketPort="" >
       <div className='font-bold'>Stats card ,  grid</div>
       <StatsGrid stats={statsData} />

       <div>primary</div>
       <Button category="primary" variant="primary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />
       <Button category="primary" variant="secondary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />
       <Button category="primary" variant="tertiary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />

error <br />
       <Button category="reject" variant="primary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br />  <br />
       <Button category="reject" variant="secondary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />
       <Button category="reject" variant="tertiary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />

export <br />
       <Button category="export" variant="primary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />
       <Button category="export" variant="secondary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />
       <Button category="export" variant="tertiary" disabled ={false} icon="DownloadSimple">  Download
       </Button> <br /> <br />

       <div className='font-bold'>Table</div>
       
      
       <Table columns={columns} data={employees} />
      </FrappeProvider>
    </div>
  )
}

export default App

