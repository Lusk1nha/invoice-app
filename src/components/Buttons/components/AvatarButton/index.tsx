import avatarImg from '../../../../assets/image-avatar.jpg';

export function AvatarButton() {

  return (
    <button
      type="button"
      role="button"
      title="User avatar"
      className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full overflow-hidden cursor-pointer"
    >
      <img className="w-auto h-auto bg-cover object-cover" src={avatarImg} alt="User avatar image" />
    </button>
  );
}