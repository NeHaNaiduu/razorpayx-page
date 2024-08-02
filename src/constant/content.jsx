import { CiHome } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { TfiStamp } from "react-icons/tfi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaBookBookmark } from "react-icons/fa6";
import { BsEnvelopePaper } from "react-icons/bs";
import { BsBookmarkDash } from "react-icons/bs";


export const navItems=[
    {name:"Home",logo:<CiHome/>},
    {name:"Payouts",logo:<MdArrowOutward/>},
    {name:"Account Statement",logo:<HiOutlineDocumentReport/>},
    {name:"Contact",logo:<FiUser/>},
    {name:"Loans",logo:<FaIndianRupeeSign/>},
    {name:"Vendor Payments",logo:<BsBookmarkDash/>},
    {name:"Tax Payments",logo:<TfiStamp/>},
    {name:"Payout Links",logo:<TiLocationArrowOutline/>},
    {name:"Payroll",logo:<BsEnvelopePaper/>},
    {name:"Reports",logo:<FaBookBookmark/>}
]

export const insights=[
    {   
        date:"23JUL",
        day:"Tuesday",
        content:<p className="text-neutral-400"><span className="font-bold text-lg text-white">1</span> contact created</p>,
        logo:"user.png"
    },
    {   
        date:"9JUL",
        day:"Tuesday",
        content:<p className="text-neutral-400 flex items-baseline"><FaIndianRupeeSign className="text-xs"/><span className="font-bold text-lg text-white">300</span>.00 credited into the account</p>,
        logo:"X.jpg"
    },
    {   
        date:"1JUL",
        day:"Monday",
        content:<p className="flex  items-baseline text-neutral-400"><span className="font-bold text-lg text-white">1</span>&nbsp;payout worth&nbsp; <FaIndianRupeeSign className="text-xs"/>  <span className="font-bold text-lg text-white"> 2,36,695</span>.00 created</p>,
        logo:"X.jpg"
    },
    {   
        date:"24JUN",
        day:"Monday",
        content:"",
        logo:"X.jpg"
    }
]
