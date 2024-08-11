import { GroupBox, Window, WindowContent } from 'react95';


export function GroupBoxDemo({children, label}) {
  return (
    <Window className='window'>
      <WindowContent>
        <GroupBox label={label}>
            {children}
        </GroupBox>
      </WindowContent>
    </Window>
  );
}