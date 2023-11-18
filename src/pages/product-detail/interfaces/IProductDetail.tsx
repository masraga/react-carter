export type TProductInfo = {
  productName: string;
  productImage: string;
  productFeelabel: string;
  productStock: number;
  productTotalFee: number;
  productRating: number;
  productSpec: Array<{ type: string | null; value: string | number | null }>;
  setProductName: any;
  setProductImage: any;
  setProductFeelabel: any;
  setProductStock: any;
  setProductTotalFee: any;
  setProductSpec: any;
  setProductRating: any;
};

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

export type TProductDetailContext = TProductInfo &
  TBookingSummary & {
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
