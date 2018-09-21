import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent } from './servers.component';

describe('ServerComponent', () => {
    let component: ServerComponent;
    let fixture: ComponentFixture<ServersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declaration: [ ServersComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })
});

it('should create', () => {
    expect(component.toBeTruthy();
});
});