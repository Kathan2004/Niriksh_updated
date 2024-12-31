export interface Approval {
    id: string;
    requestType: string;
    status: 'Pending' | 'In Review' | 'Approved' | 'Rejected';
    priority: 'High' | 'Medium' | 'Low';
    requestedBy: string;
    requestedDate: string;
    description: string;
    assignedTo: string;
    domain?: string;
  }