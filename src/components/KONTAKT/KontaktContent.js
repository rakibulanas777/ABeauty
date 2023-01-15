import React, { useState, useEffect } from "react";
import "../../styles/KontaktContent.scss";
import KONTAKT_IMG from "../../assets/kontaktimg.png";
import DatePicker from "react-date-picker";

const Treatments = ['Nails & Maniküre', 'Kryolipolyse', 'Dauerhafte Haarentfernung'];

const KontaktContent = () => {
  const [pageLoaded, setPageLoaded] = useState(0);

  const [changeBtn, setChangeBtn] = useState(true);
  const [changeBtn2, setChangeBtn2] = useState(false);
  const [fname, setFname] = useState('');
  const [fnameErr, setFnameErr] = useState('');

  const [lname, setLname] = useState('');
  const [lnameErr, setLnameErr] = useState('');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState('');

  const [msg, setMsg] = useState('');
  const [msgErr, setMsgErr] = useState('');

  const [date, setDate] = useState(new Date());
  const [dateErr, setDateErr] = useState(new Date());

  const [treatment, setTreatment] = useState(0);
  const [treatmentErr, setTreatmentErr] = useState(0);

  const [formSending, setFormSending] = useState(false);

  const [errors1, setErrors1] = useState({
    fname: true,
    lname: true,
    email: true,
    msg: true
  });

  const [errors2, setErrors2] = useState({
    fname: true,
    lname: true,
    email: true,
    phone: true,
    date: true,
    treatment: true
  });

  const handleChange1 = () => {
    if (changeBtn) {
      return;
    }
    setChangeBtn(true);
    setChangeBtn2(false);
    resetForm();
  };
  const handleChange2 = () => {
    if (changeBtn2) {
      return;
    }
    setChangeBtn(false);
    setChangeBtn2(true);
    resetForm();
  };

  function resetErrors() {
    setErrors1({
      fname: true,
      lname: true,
      email: true,
      msg: true
    });

    setErrors2({
      fname: true,
      lname: true,
      email: true,
      phone: true,
      date: true,
      treatment: true
    });

    setFnameErr('');
    setLnameErr('');
    setEmailErr('');
    setPhoneErr('');
    setMsgErr('');
    setDateErr('');
    setTreatmentErr('');
  }

  function resetForm() {
    setFname('');
    setLname('');
    setEmail('');
    setPhone('');
    setMsg('');
    setDate(new Date());
    setTreatment(0);

    resetErrors();
  }

  const changeTreatment = (e) => {
    const current = parseInt(e.target.value);
    const val = e.target.checked ? treatment + current : treatment - current;
    setTreatment(val);
  }

  useEffect(() => {
    if (pageLoaded) {
      checkFirstname();
    } else {
      setPageLoaded(1);
    }
  }, [fname]);

  useEffect(() => {
    if (pageLoaded) {
      checkLastname();
    } else {
      setPageLoaded(1);
    }
  }, [lname]);//[fname, lname, email, phone, msg, date, treatment]);

  useEffect(() => {
    if (pageLoaded) {
      checkEmail();
    } else {
      setPageLoaded(1);
    }
  }, [email]);

  useEffect(() => {
    if (pageLoaded) {
      checkPhone();
    } else {
      setPageLoaded(1);
    }
  }, [phone]);

  useEffect(() => {
    if (pageLoaded) {
      checkMsg();
    } else {
      setPageLoaded(1);
    }
  }, [msg]);

  useEffect(() => {
    if (pageLoaded) {
      checkDate();
    } else {
      setPageLoaded(1);
    }
  }, [date]);

  useEffect(() => {
    if (pageLoaded) {
      checkTreatment();
    } else {
      setPageLoaded(1);
    }
  }, [treatment]);


  // override it later with formik
  const formValidation = () => {
    if (changeBtn) {
      checkFirstname();
      checkLastname();
      checkEmail();
      checkMsg();

      if (Object.values(errors1).find(e => e)) {
        //alert('ERROR!');
      } else {
        setFormSending(true);
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
           "firstName": fname, 
           "lastName": lname, 
           "email": email, 
           "msg": msg 
        });
        fetch(`/backend/mail/questions`, {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }).then(response => response.text())
          .then(result => { setFormSending(false); alert('Ihre Daten wurden erfolgreich übermittelt.'); window.location.reload();})
          .catch(error => { setFormSending(false); alert('Server Error! Daten konnten nicht gesendet werden.') });
      }
    } else if (changeBtn2) {
      checkFirstname();
      checkLastname();
      checkEmail();
      checkPhone();
      checkDate();
      checkTreatment();

      if (Object.values(errors2).find(e => e)) {
        //alert('ERR!');
      } else {
        setFormSending(true);
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const finalTreatment = treatment == 1? 'Nails & Maniküre' : treatment == 3? 'Kryolipolyse': 
          treatment == 5? 'Dauerhafte Haarentfernung': 
          treatment == 4? 'Nails & Maniküre, Kryolipolyse':
          treatment == 6? 'Nails & Maniküre, Dauerhafte Haarentfernung':
          treatment == 8? 'Kryolipolyse, Dauerhafte Haarentfernung':
          treatment == 9? 'Nails & Maniküre, Kryolipolyse, Dauerhafte Haarentfernung': 'unbekannte Behandlung';

        let raw = JSON.stringify({
           "firstName": fname, 
           "lastName": lname, 
           "email": email, 
           "phone": phone,
           "desiredDate": date,
           "treatment": finalTreatment
        });
        fetch(`/backend/mail/appointmentRequest`, {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }).then(response => response.text())
          .then(result => { setFormSending(false); alert('Ihre Daten wurden erfolgreich übermittelt.'); window.location.reload();})
          .catch(error => { setFormSending(false); alert('Server Error! Daten konnten nicht gesendet werden.') });
      }
    }
  }

  function checkFirstname() {
    let err = false;
    if (fname.trim().length < 1) {
      setFnameErr('Pflichtfeld');
      err = true;
    } else {
      setFnameErr('');
    }
    setErrors1({ ...errors1, fname: err });
    setErrors2({ ...errors2, fname: err });
  }

  function checkLastname() {
    let err = false;
    if (lname.trim().length < 1) {
      setLnameErr('Pflichtfeld');
      err = true;
    } else {
      setLnameErr('');
    }
    setErrors1({ ...errors1, lname: err });
    setErrors2({ ...errors2, lname: err });
  }

  function checkEmail() {
    let err = false;
    if (email.trim().length < 1) {
      setEmailErr('Pflichtfeld');
      err = true;
    } else if (!email.match(/^[\wàéèäöüâçêëîôûÿÀÉÈÄÖÜÂÇÊËÎÔÛŸ\.\-]+@[\wàéèäöüâçêëîôûÿÀÉÈÄÖÜÂÇÊËÎÔÛŸ\.\-]+\.[\w]{2,8}$/i)) {
      setEmailErr('Keine gültige E-Mail Adresse');
      err = true;
    } else {
      setEmailErr('');
    }
    setErrors1({ ...errors1, email: err });
    setErrors2({ ...errors2, email: err });
  }


  function checkMsg() {
    let err = false;
    if (msg.trim().length < 1) {
      setMsgErr('Pflichtfeld');
      err = true;
    } else {
      setMsgErr('');
    }
    setErrors1({ ...errors1, msg: err });
  }

  function checkPhone() {
    let err = false;
    if (phone.trim().length < 1) {
      setPhoneErr('Pflichtfeld');
      err = true;
    } else if (!phone.match(/^0[0-9]{9}$/)
      && !phone.match(/^00[0-9]{11,12}$/)
      && !phone.match(/^\+[0-9]{11,12}$/)
      && !phone.match(/^0[0-9\s]{9,14}$/)
      && !phone.match(/^00[0-9\s]{11,16}$/)
      && !phone.match(/^\+[0-9\s]{11,16}$/)
    ) {
      setPhoneErr('Keine gültige Telefonnummer');
      err = true;
    } else {
      setPhoneErr('');
    }
    setErrors2({ ...errors2, phone: err });
  }

  function checkDate() {
    let err = false;
    if (!date) {
      setDateErr('Pflichtfeld');
      err = true;
    } else if (date.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
      setDateErr('Datum sollte in der Zukunft liegen.');
      err = true;
    } else {
      setDateErr('');
    }
    setErrors2({ ...errors2, date: err });
  }

  function checkTreatment() {
    let err = false;
    if (!treatment > 0) {
      setTreatmentErr('Pflichtfeld');
      err = true;
    } else {
      setTreatmentErr('');
    }
    setErrors2({ ...errors2, treatment: err });
  }

  return (
    <div className="KontaktC">
      <div className="kc-1">
        <div className="kc-1-title">Schauen Sie bei A Beauty vorbei - lassen Sie sich begeistern</div>
        <div className="kc-1-desc"></div>
        <div className="kc-1-question">
          <button
            className={
              changeBtn
                ? "kc-1-q-fragen kc-q-btn kc-btn-active"
                : "kc-1-q-fragen kc-q-btn"
            }
            onClick={handleChange1}
          >
            Fragen
          </button>
          <button
            className={
              changeBtn2
                ? "kc-1-q-Terminanfrage kc-q-btn kc-btn-active"
                : "kc-1-q-Terminanfrage kc-q-btn"
            }
            onClick={handleChange2}
          >
            Terminanfrage
          </button>
        </div>
        <div className="kc-1-name">
          <div className="kc-1-first-name">
            <input placeholder="Vorname*" className="kc-input" value={fname} onChange={(e) => setFname(e.target.value)} />
            {fnameErr ? <div className='fieldError'>{fnameErr}</div> : null}
          </div>
          <div className="kc-1-last-name">
            <input placeholder="Nachname*" className="kc-input" value={lname} onChange={(e) => setLname(e.target.value)} />
            {lnameErr ? <div className='fieldError'>{lnameErr}</div> : null}
          </div>
        </div>
        <div className="kc-1-email">
          <input placeholder="E-Mail*" className="kc-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailErr ? <div className='fieldError'>{emailErr}</div> : null}
        </div>
        {changeBtn2 === true || changeBtn === false ? (
          <div className="kc-1-phone">
            <input placeholder="Telefon*" className="kc-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
            {phoneErr ? <div className='fieldError'>{phoneErr}</div> : null}
          </div>
        ) : (
            <div></div>
          )}
        {changeBtn2 === true || changeBtn === false ? (
          <div className="kc-1-date">
            <p>Wunschetermin*{dateErr ? <span className='fieldError'> {dateErr}</span> : null}</p>
            <DatePicker
              locale="de"
              onChange={setDate}
              value={date}
              className="date"
              calendarIcon={null}
              clearIcon={null}
              format="dd-MM-y"
            />
          </div>
        ) : (
            <div></div>
          )}
        {changeBtn === true || changeBtn2 === false ? (
          <div className="kc-1-message">
            <textarea placeholder="Nachricht*" className="kc-input"
              value={msg} onChange={(e) => setMsg(e.target.value)} />
            {msgErr ? <div className='fieldError'>{msgErr}</div> : null}
          </div>
        ) : (
            <div></div>
          )}
        {changeBtn2 === true || changeBtn === false ? (
          <div className="kc-1-choose">
            <p className="kc-1-choose-title">Behandlung*{treatmentErr ? <span className='fieldError'> {treatmentErr}</span> : null}</p>
            <div className="kc-1-c-each">
              <input type="checkbox" value={1} onChange={changeTreatment} />
              <p>Nails & Maniküre</p>
            </div>
            <div className="kc-1-c-each">
              <input type="checkbox" value={3} onChange={changeTreatment} />
              <p>Kryolipolyse</p>
            </div>
            <div className="kc-1-c-each">
              <input type="checkbox" value={5} onChange={changeTreatment} />
              <p>Dauerhafte Haarentfernung</p>
            </div>
          </div>
        ) : (
            <div></div>
          )}
        <div className="kc-1-button">
          <button style={formSending ? { cursor: 'default', backgroundColor: '#777' } : {}} className="kc-1-button-sended" disabled={formSending} onClick={formValidation}>SENDEN</button>
        </div>
      </div>
      <div className="kc-2">
        <img src={KONTAKT_IMG} alt="Kontakt img" />
      </div>
    </div>
  );
};

export default KontaktContent;
