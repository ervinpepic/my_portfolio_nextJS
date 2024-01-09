import { webDevCardData } from "../Models/WebDevData";

const WebDevCard = () => {
  return (
        <div className="
          bg-slate-200 dark:bg-gray-700 rounded-md p-1 mb-4 w-auto h-auto"
        >
          
            <h3
              className="
                text-center text-lg font-medium text-slate-700 dark:text-slate-200
                pt-2 mt-2 mx-2 px-2 "
            >
              {webDevCardData.title}
            </h3>
            <h4
              className="
                text-center text-normal font-medium text-slate-700 dark:text-slate-200 
                mx-2 px-2 mt-6"
            >
              {webDevCardData.subtitles.first}
            </h4>
            {webDevCardData.programmingLang.map((language, index) => (
              <p
                key={index}
                className="
                  flex text-base text-gray-700 dark:text-slate-200 pt-2 px-2 mt-2 mx-2"
              >
                <span className="font-medium">{language.name} : </span> {language.framework}
              </p>
            ))}
            <h4
              className="
                text-center text-normal font-medium text-slate-700 dark:text-slate-200 
                mx-2 px-2 mt-6"
            >
              {webDevCardData.subtitles.second}
            </h4>
            { webDevCardData.other.map((databse, index) => (
              <p
                key={index}
                className="
                  text-base text-gray-700 dark:text-slate-200 pt-2 px-2 mt-2 mx-2"
              >
                <span className="font-medium">{databse.name} : </span> {databse.framework}
              </p>
            )) }
            <div 
              className="
                flex justify-center text-xl text-gray-700 
                dark:text-slate-200 pt-2 px-2 mt-2 mx-2 mb-4"
            >
              {webDevCardData.icons.map((Icon, index) => (
                <span key={index} className='mx-0.5'><Icon/></span>
              ))}
            </div>
        </div>

  );
};

export default WebDevCard;
