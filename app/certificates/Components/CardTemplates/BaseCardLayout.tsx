import { Certificate } from "../../Types/Certificate";
import DeleteBtn from "../Forms/Buttons/DeleteBtn";
import { certificateCardClass } from "./CertificateCardStyle";

const BaseCardLayout = ({
  certificatesBySchool,
  sessionStatus,
  handleDelete,
  deleteLoading,
}: {
  certificatesBySchool: Record<string, Certificate[]>;
  handleDelete: (schoolName: string, certificateTitle: string) => void;
  deleteLoading: boolean;
  sessionStatus: string;
}) => {
  const {
    schoolNameClass,
    cardClass,
    certTitleClass,
    certSubtitleClass,
    paragraphClass,
    certLinkClass,
  } = certificateCardClass;
  return (
    <>
      {Object.entries(certificatesBySchool).map(
        ([schoolName, certificates]) => (
          <div key={schoolName}>
            <h1 className={schoolNameClass}>{schoolName}</h1>
            <div className="grid xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3">
              {certificates.map((certficaite, index) => (
                <div key={index} className={cardClass}>
                  <div className="flex justify-end">
                    {sessionStatus === "authenticated" && (
                      <DeleteBtn
                        deleteFunction={() =>
                          handleDelete(schoolName, certficaite.title)
                        }
                        loading={deleteLoading}
                      />
                    )}
                  </div>
                  <h3 className={certTitleClass}>{certficaite.title}</h3>
                  <h4 className={certSubtitleClass}>{certficaite.subtitle}</h4>
                  <p className={paragraphClass}>{certficaite.description}</p>
                  <div className="p-2 m-2">
                    <a className={certLinkClass} href={certficaite.url!}>
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default BaseCardLayout;
