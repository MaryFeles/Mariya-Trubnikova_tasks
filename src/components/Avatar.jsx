import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const CurrentUserAvatar = ({handleClick}) => {
    return (
    <>
    <div>
      <Avatar className={"user-avatar"} size={26} icon={<UserOutlined />} onClick={handleClick} />
    </div>
  </>);
}

export default CurrentUserAvatar;