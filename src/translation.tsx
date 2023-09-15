import React, { useState } from 'react';

interface PictureI {
  record: any; // 'any' can be replaced with the actual type of the 'record' property
}

const RandomPicture: React.FC<PictureI> = (props) => {
  const locales = ['Es [Default]', 'Pt', 'En', 'De', 'It', 'Fr', 'Ru', 'Tr'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [nameValue, setNameValue] = useState(
    props.record.params.nombre
      ? props.record.params.nombres.filter(
          (name) => name.locale == locales[0].substring(0, 2).toLowerCase(),
        )[0]?.name || ''
      : '',
  );

  const [descValue, setDescValue] = useState(
    props.record.params.descripcion
      ? props.record.params.descripciones.filter(
          (desc) => desc.locale == locales[0].substring(0, 2).toLowerCase(),
        )[0]?.desc || ''
      : '',
  );

  const handleTabChange = (index) => {
    setCurrentIndex(index);

    if (props.record.params.nombre) {
      setNameValue(
        props.record.params.nombres
          .concat(props.record.params.new)
          .filter(
            (name) =>
              name.locale == locales[index].substring(0, 2).toLowerCase(),
          )[0]?.name || '',
      );
    }

    if (props.record.params.descripcion) {
      setDescValue(
        props.record.params.descripciones
          .concat(props.record.params.new)
          .filter(
            (desc) =>
              desc.locale == locales[index].substring(0, 2).toLowerCase(),
          )[0]?.desc || '',
      );
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', width: 'max-content' }}>
        {locales.map((locale, index) => (
          <div
            key={index}
            onClick={() => handleTabChange(index)}
            style={{
              height: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0 15px',
              width: 'fit-content',
              marginLeft: 0 == index ? '0' : '-2px',
              borderStyle: 'solid',
              borderColor:
                currentIndex == index
                  ? 'rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0)'
                  : 'rgba(0, 0, 0, 0.4)',
              borderWidth: '2px',
              color: currentIndex == index ? 'white' : 'black',
              borderRadius: '8px 8px 0 0',
              backgroundColor:
                currentIndex == index ? 'rgba(0, 0, 0, 0.6)' : 'white',
              zIndex: currentIndex == index ? '2' : '0',
            }}
          >
            <p style={{ whiteSpace: 'nowrap' }}>{locale}</p>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: 'whitesmoke',
          borderRadius: '0 0 8px 8px',
          padding: '30px 20px 10px',
          marginBottom: '40px',
        }}
      >
        <div className="sc-hjsqBZ hvvIIg">
          {props.record.params.nombre ? (
            <>
              <label htmlFor="name" className="sc-eDDNvR dTIxVR adminjs_Label">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                className="sc-qRumB csBXWs adminjs_Input"
                value={nameValue}
                onChange={(event) => {
                  setNameValue(event.target.value);
                  const nameObject = props.record.params.nombres
                    .concat(props.record.params.new)
                    .filter(
                      (name) =>
                        name.locale ==
                        locales[currentIndex].substring(0, 2).toLowerCase(),
                    )[0];

                  if (nameObject) {
                    nameObject.name = event.target.value;
                  } else {
                    props.record.params.new.push(
                      props.record.params.descripcion
                        ? {
                            locale: locales[currentIndex].toLowerCase(),
                            name: event.target.value,
                            desc: '',
                          }
                        : {
                            locale: locales[currentIndex].toLowerCase(),
                            name: event.target.value,
                          },
                    );
                  }
                }}
              />
              <div className="sc-gjTGSA sc-ejdXBC duDtti dbsNdj adminjs_Text"></div>
            </>
          ) : (
            <></>
          )}

          {props.record.params.descripcion ? (
            <>
              <label htmlFor="desc" className="sc-eDDNvR dTIxVR adminjs_Label">
                Descripción
              </label>
              <input
                id="desc"
                name="desc"
                className="sc-qRumB csBXWs adminjs_Input"
                value={descValue}
                onChange={(event) => {
                  setDescValue(event.target.value);
                  const descObject = props.record.params.descripciones
                    .concat(props.record.params.new)
                    .filter(
                      (desc) =>
                        desc.locale ==
                        locales[currentIndex].substring(0, 2).toLowerCase(),
                    )[0];

                  if (descObject) {
                    descObject.desc = event.target.value;
                  } else {
                    props.record.params.new.push(
                      props.record.params.nombre
                        ? {
                            locale: locales[currentIndex].toLowerCase(),
                            desc: event.target.value,
                            name: '',
                          }
                        : {
                            locale: locales[currentIndex].toLowerCase(),
                            desc: event.target.value,
                          },
                    );
                  }
                }}
              />
              <div className="sc-gjTGSA sc-ejdXBC duDtti dbsNdj adminjs_Text"></div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomPicture;
