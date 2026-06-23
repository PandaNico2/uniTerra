export type CareLogType = 'watering' | 'observation' | 'note';

export type CareLog = {
  id: string;
  plantId: string;
  type: CareLogType;
  note?: string;
  createdAt: string;
};

export type GardenPlant = {
  plantId: string;
  addedAt: string;
  careLogs: CareLog[];
};
