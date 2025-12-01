interface Props {
  title: string;
  children: React.ReactNode;
}

const UserSettingLayout = (props: Props) => {
  const { title, children } = props;

  console.log("UserSettingLayout");
  return (
    <div className="flex flex-col gap-1 justify-center border p-2 rounded-lg">
      <h2 className="text-xl">{title}</h2>
      <hr className="border" />
      {children}
    </div>
  );
};
export default UserSettingLayout;
