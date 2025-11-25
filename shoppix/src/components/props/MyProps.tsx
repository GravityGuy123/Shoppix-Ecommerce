"use client"

import { Greeter } from "./Greeter";
import DynamicStyling from "./DynamicStyling";
import WelcomeCard from "./WelcomeCard";
import ProductCard from "./ProductCard";
import UserCard from "./UserCard";
import { UserProfile, Userprofile } from "./Userprofile";
import { BookInfo } from "./BookInfo";
import { User } from "./User";
import Card from "./Card";
import Image from "next/image";
import { Card2 } from "./Card2";
import { useState } from "react";
import Modal from "./Modal";
import { AlertBox } from "./AlertBox";

export default function MyProps() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const userData = {
    name: "Mike",
    address: {
      city: "New York",
      country: "USA"
    }
  }
  
  return (
    <section className="py-8- pt-2 pb-8">
      {/* Greeter */}
      <div className="mb-4">
        <Greeter username="Gravity" age={23} />
      </div>

      <div className="mb-4">
        <Greeter username="Bob" />
      </div>

      <div className="mb-4">
        <Greeter />
      </div>

      {/* Welcome Card */}
      <section className="mb-6">
        <div className="mb-2">
          <WelcomeCard name="Clara" />
        </div>

        <div className="mb-2">
          <WelcomeCard name="Barry" />
        </div>

        <div className="mb-2">
          <WelcomeCard />
        </div>
      </section>
      
      {/* User Card */}
      <section className="mb-6">
        <div className="mb-2">
          <UserCard 
            name="Dani Moore"
            email="danimore@gmail.com"
            age={23} />
        </div>

        <div className="mb-2">
          <UserCard 
            name="Bobby Jone"
            email="bobbijones@gmail.com"
            age={27} />
        </div>
      </section>

      {/* Product Card */}
      <div className="mb-6">
        <section className="mb-2">
          <ProductCard 
            name="Mouse Pad"
            price= {50}
            inStock="Available" />
        </section>

        <section className="mb-2">
          <ProductCard 
            name="Electric Guitar"
            price= {900}
            inStock="Available" />
        </section>

        <section className="mb-2">
          <ProductCard 
            name="Rolex Wrist Watch"
            price= {300} />
        </section>

        <section className="mb-2">
          <ProductCard 
            name="Laptop"
            price= {999}
            inStock="Available" />
        </section>
      </div>

      {/* Dynamic Styling */}
      <aside className="mb-6">
        <section className="mb-2">
          <DynamicStyling badgeType="Success" />
        </section>

        <section className="mb-2">
          <DynamicStyling badgeType="Warning" />
        </section>

        <section className="mb-2">
          <DynamicStyling badgeType="Error" />
        </section>

        <section className="mb-2">
          <DynamicStyling />
        </section>
      </aside>

      {/* User Profile */}
      <div className="mb-6">
        <section className="mb-2">
          <Userprofile />
          <UserProfile />
        </section>

        <section className="mb-2">
          <Userprofile name="Marvel" age={13} location="Nnewi Anambra State" bio="Just be me" />
          <UserProfile name="Marvel" age={13} location="Nnewi Anambra State" bio="Just be me" />
        </section>

        <section className="mb-2">
          <Userprofile name="Sonic" age={23} location="Asaba" bio="Just me & money" />
          <UserProfile name="Sonic" age={23} location="Asaba" bio="Just me & money" />
        </section>
      </div>

      <section className="mb-6">
        <div className="mb-2">
          <BookInfo title="The Rise of Kyoshi" author="Nikki D" year={2003} genre="Fiction" />
        </div>

      {/* Book Info */}
        <div className="mb-2">
          <BookInfo title="The Dawn of Yangcheng" author="Nikki D" year={2003} genre="Fiction" />
        </div>
      </section>

      {/* User (Nested) */}
      <div className="mb-6">
        <User {...userData} />
        <User name="Mmeso" address={{city: "Imo State", country: "Nigeria"}} /> 
      </div>

      {/* Card */}
      <aside className="mb-6">
        <div className="mb-2">
          <Card >
            <h2>Card Title</h2>
            <p>This is some content inside the card</p>
          </Card>
        </div>

        <div className="mb-2">
        </div>

        <Card>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="bg-indigo-500 rounded-full overflow-hidden mb-2">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={100}
              className="mb-4 bg-fuchsia-500- fill-fuchsia-500"
            />
            </div>
            <p className="text-center text-gray-700 font-medium">
              Vercel — The best deployment platform
            </p>
          </div>
        </Card>
      </aside>

      {/* Card2 */}
      <Card2 >
        <div className="mb-6">
          <div className="flex flex-col items-center justify-center p-4 mb-2">
              <h2>Card Title</h2>
              <section className="bg-blue-400 rounded-full overflow-hidden mb-2 m-2">
                <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={100}
                className="mb-4" />
              </section>
          </div>
        </div>
      </Card2>

      {/* Modal */}
      <div className="w-full- flex justify-center">
        <button type="button" onClick={() => setIsModalOpen(true)} className="cursor-pointer hover:text-fuchsia-500">Open Modal</button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
          <h2>Welcome!</h2>
          <p>This is a modal with custom content</p>
        </Modal>
      </div>

      {/* ALERT bOX */}
      <div className="mt-6">
        <AlertBox type="info">
          <p><strong>Info:</strong> This is an informational message</p>
        </AlertBox>

        <AlertBox type="Warning">
          <p><strong>Info:</strong> This is an warning message</p>
        </AlertBox>

        <AlertBox type="error">
          <p><strong>Info:</strong> This is an error message</p>
        </AlertBox>

        <AlertBox>
          <p><strong>Info:</strong> This is an informational message</p>
        </AlertBox>
      </div>
    </section>
  );
}
