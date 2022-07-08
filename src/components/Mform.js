

const from = () =>   (
  
  <div className='container-form'>
    <h1>Phoneboock</h1>
    <form>
      <input type="text" id='nombre' placeholder='Name' required/>
      <br/>
      <input type="text" id='lastn' placeholder='Last Name' required/>
      <br/>
      <input type="text" id='phon' placeholder='phone' required/>
      <br/>
      <button type="submit">Save</button>
    </form>
    </div>


);

export default from;