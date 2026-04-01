import { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);

  return (
    <div className='bg-[#F9F9F9] pt-4 mx-auto'>

      <div className='pb-30 w-10/12 mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
          {models.map(model => (
            <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Models