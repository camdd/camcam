import { GroupBox, Window, WindowContent } from 'react95';


export function GroupBoxDemo({ children, label }) {
  return (
    <div className='window' style={{padding:'4rem'}}>
      <Window style={{display:'flex', flexDirection:'column'}}>
        <WindowContent>
          <GroupBox label={label}>
            {children}
          </GroupBox>
        </WindowContent>
      </Window>
    </div>

  );
}