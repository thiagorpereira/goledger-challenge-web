import React, {useState} from 'react';
import './styles.css'

function ContactForm({onSubmit}){

  const [assetType, setAssetType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge ] = useState();
  

  async function handleAdd(e) {
    e.preventDefault();
    

    const response = await api.post("/create", {
      @assetType: assetType,
      name,
      phone,
      company,
      email,
      age,
    });

    console.log(response);
    setAssetType('');
    setName('');
    setPhone('');
    setCompany('');
    setEmail('');
    setAge('');
  }

  return(
    <form onSubmit={handleAdd}>
    <div className="input-block">
      <label htmlFor="assetType">Tipo</label>
      <input 
        name="assetType"
        id="assetType" 
        value={assetType}
        onChange={e => setAssetType(e.target.value)}
        required/>
    </div>
    <div className="input-block">
      <label htmlFor="name"> Name  </label>
      <input 
        name="name"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required/>
    </div>
    <div className="input-block">
      <label htmlFor="goals"> Telefone </label>
      <input 
        name="goals"
        id="goals" 
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required/>
    </div>
    <div className="input-block">
      <label htmlFor="goals"> Company </label>
      <input 
        name="goals"
        id="goals" 
        value={company}
        onChange={e => setCompany(e.target.value)}
        required/>
    </div>
    <div className="input-block">
      <label htmlFor="goals"> Email </label>
      <input 
        name="goals"
        id="goals" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        required/>
    </div>
    <div className="input-block">
      <label htmlFor="goals"> Idade </label>
      <input 
        name="goals"
        id="goals" 
        value={age}
        onChange={e => setAge(e.target.value)}
        required/>
    </div>

    <button type="submit">Salvar</button>

  </form>
  )
}

export default DevForm;