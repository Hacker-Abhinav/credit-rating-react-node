import './BadgeStatus.style.css';

interface Props {
  status: string|number|boolean;
  text?: string|undefined;
}

const DEFAULT_ACTIVE_BADGE = () => {
  return (
    <div className="badge badge-active">
      Active
    </div>
  )
}

const DEFAULT_INACTIVE_BADGE = () => {
  return (
    <div className="badge badge-in_active">
      Inactive
    </div>
  )
}

const BadgeStatus:React.FC<Props> = (props) => {
  const { status, text } = props;
  return(
    <div>
      {
        status 
        ? 
        DEFAULT_ACTIVE_BADGE()
        : 
        DEFAULT_INACTIVE_BADGE()
      }
    </div>
  )
}

export default BadgeStatus;