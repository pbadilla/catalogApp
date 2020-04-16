/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FormField, Label, Icon, Input } from 'pcln-design-system';

const SearchBox = () => (
  <FormField>
    <Label htmlFor="search">Search</Label>
    <Icon name="Search" size="20" />
    <Input id="search" name="search" defaultValue="" placeholder="Search Product" />
  </FormField>
);

export default SearchBox;
