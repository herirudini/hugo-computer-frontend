export interface Invoice {
    customer_id: string,
    orderList: object[]
    paymentStatus: string,
    shippingStatus: string,
    bills: string,
    paymentMethod: string,
    shippingMethod: string,
    transferCode: string,
    address: object,
}