import React from 'react'
import Faq from './QandAnswer'
import Button from './Button'

export default function FAQ() {
    return (
        <section className='out jcenter icenter bg-backgroundw'>
            <section className='in jcenter text-textsecondary flex-col  gap-4 icenter p-section'>
                <h2 className='text-h2'>FAQ's</h2>
                
                <div className='flex flex-col gap-2 w-full'>
                    <Faq q='What is GoRider?' ans='GoRider is a smart delivery platform that connects individuals, vendors, and riders to manage seamless, multi-vendor deliveries across cities in Nigeria.'/>
                    <Faq q='Is GoRider fully launched?' ans='GoRider is currently in its early launch phase. We are onboarding vendors and delivery agents while finalizing the GoRider app for public release.'/>
                    <Faq q='How does GoRider work for everyday users?' ans='Users can explore different vendors on the app, add items to their cart (even from different stores), and track each delivery independently with real-time updates.'/>
                    <Faq q='Where is GoRider available right now?' ans='We are launching first in Port Harcourt, with plans to expand to Lagos, Abuja, and other cities soon.'/>
                    <Faq q='What is GoRider’s “Multiple Cart” system?' ans='With GoRider, users can buy from different stores in one session. Each store’s order is handled and tracked separately—giving you full control and clarity over your deliveries.'/>
                </div>

                <Button name='Get More answers' bg='bg-backgroundp' textColor='text-textmain' others='w-fit'/> 
            </section>
        </section>
    )
}
