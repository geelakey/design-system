// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Alert = props => {
  const { className, type, children, ...rest } = props;

  return (
    <div
      className={classNames(
        'slds-notify slds-notify_alert slds-theme_alert-texture',
        className,
        type ? 'slds-theme_' + type : null
      )}
      role="alert"
    >
      <span className="slds-assistive-text">{type || 'info'}</span>
      {children}
      {/* <ButtonIcon
        className="slds-notify__close slds-button_icon-inverse"
        symbol="close"
        assistiveText="Close"
        title="Close"
      /> */}
    </div>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Alert type="info">
    <h2>
      Your bill has been consistent for the last 3 months.{' '}
      <a href="javascript:void(0);" className="alert-link">
        Setup Direct Debit
      </a>
    </h2>
  </Alert>
);

export let states = [
  {
    id: 'critical',
    label: 'Critical',
    element: (
      <Alert type="warning">
        <h2>
          Please pay the outstanding amount now or arrange an extension.{' '}
          <a href="javascript:void(0);" className="alert-link">
            Setup Direct Debit
          </a>
        </h2>
      </Alert>
    )
  },
  {
    id: 'error inline',
    label: 'Error inline',
    element: (
      <Alert type="error">
        <h2>
          <b> Elliots Business Visa </b>{' '}
          <span className="alert-accent">Card expires soon</span>
        </h2>
      </Alert>
    )
  },
  {
    id: 'recommendation',
    label: 'Recommendation',
    element: (
      <Alert type="recommendation">
        <h2>
          <b>Monthly Pass </b>
          <p>$16.99 with 2 weeks for free.</p>
          <span className="alert-accent">Recommended for you</span>
        </h2>
      </Alert>
    )
  }
];
