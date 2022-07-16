export interface IContact {
  address: string;
  city: string;
  contactNo: string;
  facebook: string;
  whatsapp: string;
  instagram: string;
}

export interface ITeam {
  fullName: string;
  contact?: string;
  role: "Organizer" | "Contributor" | "Core Team" | "Founder";
  imageSrc: string;
}

export interface IGallery {
  label?: string;
  imageSrc: string;
}

export interface IData {
  contact: IContact;
  founders: ITeam[];
  contributors: ITeam[];
  images: IGallery[];
}
