import React from 'react';
import UseClass from '../../hooks/useClass';
import MyClassCard from './MyClassCard';

const MyClass = () => {
    const [myclass] = UseClass()
    return (
        <div className='md:px-32'>
            <h3 className='text-center py-3 text-3xl font-semibold'>Total Class: {myclass.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    myclass.map(classItem => <MyClassCard
                        key={classItem._id}
                        classItem={classItem}
                    />)
                }
            </div>
        </div>
    );
}

export default MyClass;
