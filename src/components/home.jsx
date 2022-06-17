import MapIcon from "./style/images/map_icon.png";

const home = () => {
  const title = "אליה ואסף פתרונות ל INS בעמ.";
  const realtimeMsg = "לחצן מצוקה";
  const instructionMsg = "טפל בקריאות בזמן אמת";
  const secondTitle = "בחר קומה, נהל משתמשים בחדרי הבניין ובתוכו";
  const welcome = "ברוך הבא";
  return (
    <div>
      <br />
      <br />
      <div className="z-0 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"></div>
      <div className="z-10 relative py-12 mx-auto md:w-1/2 text-center">
        <h1 className="leading-tight mb-8 text-5xl text-center font-thin">
          {welcome}
        </h1>
        <p className="text-center text-xl font-light mb-8">{secondTitle}</p>
        <p className="text-base font-thin">{instructionMsg}</p>
        <button
          type="button"
          className="mt-6 bg-gray-100 text-gray-900 shadow hover:shadow-lg uppercase py-4 px-6 font-semibold"
        >
          {realtimeMsg}
        </button>
        <p className="mt-4 text-xs opacity-50">{title}</p>
      </div>
    </div>
  );
};

export default home;
