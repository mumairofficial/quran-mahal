export interface IContact {
  address: string;
  city: string;
  contactNo: string;
  facebook: string;
  whatsapp: string;
}

export interface ITeam {
  fullName: string;
  contact?: string;
  role: "Organizer" | "Contributor" | "Core Team" | "Founder";
  imageSrc: string;
}

export interface IData {
  contact: IContact;
  founders: ITeam[];
  team: ITeam[];
}
