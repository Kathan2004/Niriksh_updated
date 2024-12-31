import React from 'react';
import { useParams } from 'react-router-dom';
import { AlertHeader } from '../../components/alerts/AlertHeader';
import { RiskDetails } from '../../components/alerts/RiskDetails';
import { SimilarityDetails } from '../../components/alerts/SimilarityDetails';
import { alertData } from '../../data/alertData';

export function AlertDetails() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <AlertHeader 
        domain={alertData.domain}
        timestamp={alertData.timestamp}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Risk Details */}
        <div>
          <RiskDetails risk={alertData.risk} />
        </div>

        {/* Right Column - Similarity Details */}
        <div className="lg:col-span-2">
          <SimilarityDetails
            similarity={alertData.similarity}
            screenshot={alertData.screenshot}
            htmlCode={alertData.htmlCode}
          />
        </div>
      </div>
    </div>
  );
}