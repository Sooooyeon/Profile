import React from 'react'
import certificate from '../../assets/data/certificate.json';

function Certificate() {

  type CertificateItem = {
    id: number,
    name: string,
    date: string,
    organization: string
  }

  interface CertificateData {
  certificate: CertificateItem[]
}
  
  const certificates:CertificateItem[] = (certificate as CertificateData).certificate;

  console.log(certificates);

  return (
    <div className='border-l-4 border-indigo-400 pl-5'>
      {certificates.map((item)=>(
        item.id < 5 ?
        <div key={item.id} className='flex gap-4 items-center mb-4'>
          <h5 className='text-lg'>{item.name}</h5>
          <p className='text-sm'>{item.date}<span className='ml-2'>{item.organization}</span></p>
        </div>
        :
        null
      ))}
    </div>
  )
}

export default Certificate;



