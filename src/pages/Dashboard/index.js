import React from 'react';

import SearchBar from '../../components/SearchBar';
import School from '../School';
import AddSchoolModal from '../School/AddSchoolModal';
import EditSchoolModal from '../School/EditSchoolModal';
import AddTechModal from '../Tech/AddTechModal';
import TechListModal from '../Tech/TechListModal';
import Button from '../../components/Button';
import SideNav from '../../components/SideNav';

export default function Dashboard() {
  return (
    <>
      <div>
        <SideNav />
        <SearchBar />
      </div>
      <div className="container">
        <School />
        <AddSchoolModal />
        <EditSchoolModal />
        <AddTechModal />
        <TechListModal />
        <Button />
      </div>
    </>
  );
}
