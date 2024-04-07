import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';
import useGetConfig from '../hooks/useGetConfig';

const Head = ({ intl }) => {
  const {
    platformName,
  } = useGetConfig();

  return (
    <Helmet>
      <title>
        {intl.formatMessage(messages['account.page.title'], { siteName: platformName || getConfig().siteName })}
      </title>
    </Helmet>
  );
};

Head.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Head);
