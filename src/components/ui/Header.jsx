const Header = ({ mainTitle, title, subTitle }) => {
  return (
    <div className="flex flex-col  justify-center items-center ">
      <div className="md:w-2/3 flex flex-col  justify-center items-center ">
        <h3 className="text-secondary font-bold text-4xl my-2">
          <span className="text-primary">{mainTitle}</span> &nbsp;
          {title}
        </h3>
        <p className="text-subsidery text-md text-center">{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
