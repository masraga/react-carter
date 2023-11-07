export type TBookingSummary = {
  bookingFee: number;
  isValidBook: boolean;
  showBook: boolean;
  invalidBookMsg: string;
  bookUrl: string;
  setBookingFee: any;
  setIsValidBook: any;
  setInvalidBookMsg: any;
  setShowBook: any;
  setBookUrl: any;
};

export type TProductDetailContext = TBookingSummary & {
  imageDimension: { width: number; height: number };
  tableWidth: number;
};

export type IProductInformation = {
  name: string;
  image: string;
  stock?: number;
  rating?: number;
  totalFee: number;
  feeLabel: string;
};

export type TBookSchedule = {
  dateStart: Date;
  dateEnd: Date;
};

export type TBookingAvailability = {
  schedule: Array<TBookSchedule>;
};

export type TProductSpecification = {
  spec: Array<{ type: string; value: string | number }>;
};
