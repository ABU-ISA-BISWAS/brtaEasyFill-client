export interface Institute {
  id: number;
  name: string;
  allowedIp: string;
  licenseKey?: string;
  licenseExpiry?: string;
  status?: string;
}
