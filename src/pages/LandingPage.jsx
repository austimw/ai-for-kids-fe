import { useNavigate } from 'react-router-dom'
import { LandingPageIcon } from '../assets'

export function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/walkthrough");
  };

  return (
    <div className="h-full w-full" onClick={handleClick}>
      <img src={LandingPageIcon} alt="Landing Page Icon" className="h-full w-[430px] rounded-lg object-cover" />
    </div>
  )
}