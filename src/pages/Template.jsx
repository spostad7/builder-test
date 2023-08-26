import { Button } from '../components/common';
import { Location, Star } from '../components/icon';

import beachHouse from '../assets/beach-house.jpg';
import beachHouseInterior1 from '../assets/beach-house-interior-1.jpg';
import beachHouseInterior2 from '../assets/beach-house-interior-2.jpg';

function Template() {
	return (
		<div className='w-full min-h-screen bg-slate-800 text-slate-400'>
			<main className='py-10 px-4 sm:p-6 md:py-16 md:px-8'>
				<div className='max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
					<div className='relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
						<h1 className='mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white'>
							Beach House in Collingwood
						</h1>
						<p className='text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>
							Entire house
						</p>
					</div>
					<div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
						<img
							src={beachHouse}
							alt=''
							className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full'
							loading='lazy'
						/>
						<img
							src={beachHouseInterior1}
							alt=''
							className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32'
							loading='lazy'
						/>
						<img
							src={beachHouseInterior2}
							alt=''
							className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32'
							loading='lazy'
						/>
					</div>
					<dl className='mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2'>
						<dt className='sr-only'>Reviews</dt>
						<dd className='text-indigo-600 flex items-center dark:text-indigo-400'>
							<Star />
							<span>
								4.89{' '}
								<span className='text-slate-400 font-normal'>
									(128)
								</span>
							</span>
						</dd>
						<dt className='sr-only'>Location</dt>
						<dd className='flex items-center'>
							<svg
								width='2'
								height='2'
								aria-hidden='true'
								fill='currentColor'
								className='mx-3 text-slate-300'
							>
								<circle cx='1' cy='1' r='1' />
							</svg>
							<Location />
							Collingwood, Ontario
						</dd>
					</dl>
					<div className='mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4'>
						<Button title='Check availability' />
					</div>
					<p className='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400'>
						This sunny and spacious room is for those traveling
						light and looking for a comfy and cosy place to lay
						their head for a night or two. This beach house sits in
						a vibrant neighborhood littered with cafes, pubs,
						restaurants and supermarkets and is close to all the
						major attractions such as Edinburgh Castle.
					</p>
				</div>
			</main>
		</div>
	);
}

export default Template;
