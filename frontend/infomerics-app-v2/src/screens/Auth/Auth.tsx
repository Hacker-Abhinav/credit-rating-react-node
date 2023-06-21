import { LinkButton, PrimaryButton } from "@/components/Buttons";

function Auth() {
  return (
    <div>
      <h2>Auth Screen</h2>
      
      <LinkButton path='/dashboard/roles'>
        All Roles
      </LinkButton>

      <PrimaryButton onClick={() => {
        alert(`Button Clicked`);
      }}>
        Login Button
      </PrimaryButton>
    </div>
  )
}

export default Auth;