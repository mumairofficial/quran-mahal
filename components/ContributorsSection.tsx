import React from "react";
import Image from "next/image";
import { ITeam } from "../models";

interface IProps {
  contributors: ITeam[];
}

const ContributorsSection = ({ contributors }: IProps) => {
  return (
    <section id="contributors" className="overflow-hidden py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h1 className="text-black text-3xl md:text-4xl font-bold">
            Contributors
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5 py-4 mt-10">
          {contributors.map((member) => (
            <div key={member.fullName} className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <Image
                  className="w-auto h-48 rounded-full"
                  src={member.imageSrc}
                  alt={member.fullName}
                  width={128}
                  height={128}
                />
              </div>
              <div className="flex-grow text-center">
                <h3 className="text-lg leading-tight text-slate-900">
                  {member.fullName}
                </h3>
                <p className="text-xs leading-tight text-slate-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
