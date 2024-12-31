
import { Clock, User, Shield } from 'lucide-react';
import { ApprovalStatus } from './ApprovalStatus';
import { PriorityBadge } from '../common/PriorityBadge';
import type { Approval } from '../types/approvals';
import React from 'react';

interface ApprovalTableProps {
  approvals: Approval[];
}

export function ApprovalTable({ approvals }: ApprovalTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Type</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Description</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Priority</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Requested By</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Assigned To</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
          </tr>
        </thead>
        <tbody>
          {approvals.map((approval) => (
            <tr
              key={approval.id}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <td className="px-4 py-4 text-purple-600 dark:text-purple-400">
                {approval.id}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{approval.requestType}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-600 dark:text-gray-300">
                {approval.description}
              </td>
              <td className="px-4 py-4">
                <ApprovalStatus status={approval.status} />
              </td>
              <td className="px-4 py-4">
                <PriorityBadge priority={approval.priority} />
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{approval.requestedBy}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{approval.assignedTo}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{approval.requestedDate}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}