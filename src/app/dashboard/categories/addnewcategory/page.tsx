import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const AddNewCategoryPage = () => {
  return (
    <div className='flex flex-col gap-4' >
        <h2 className='font-bold text-primary text-xl' >Adding new category</h2>
        <Input placeholder='Category name' type='text' required />
        <Button>Add</Button>
    </div>
  )
}

export default AddNewCategoryPage